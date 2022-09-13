// @flow

import moment from "moment"
import { setIn, updateIn, without } from "seamless-immutable"
import type { Action, MainLayoutState } from "../../MainLayout/types"
import getActiveImage from "./get-active-image"

const typesToSaveWithHistory = {
  BEGIN_BOX_TRANSFORM: "Transform/Move Box",
  BEGIN_MOVE_POINT: "Move Point",
  DELETE_REGION: "Delete Region",
}

export const saveToHistory = (state: MainLayoutState, name: string) => {
  return updateIn(state, ["history"], (h) => {
    return [
      {
        time: moment().toDate(),
        state: without(state, "history"),
        name,
      },
    ].concat((h || []).slice(0, 9))
  })
}

export default (reducer) => {
  return (state: MainLayoutState, action: Action) => {
    const prevState = state
    const nextState = reducer(state, action)

    if (action.type === "REDO_HISTORY") {
      let newArr = [...window.annotation_redo] || []
      if (newArr.length) {
        let lastElement = newArr[newArr.length - 1].annotation
        newArr.splice(window.annotation_redo.length - 1, 1)
        window.annotation_redo = newArr

        const state = saveToHistory(nextState, lastElement.name)
        const { pathToActiveImage } = getActiveImage(state)

        return setIn(
          state,
          [...pathToActiveImage, "regions"],
          lastElement.regionsArr
        )
      }
    }

    if (action.type === "RESTORE_HISTORY") {
      if (state.history.length > 0) {
        let history_return = () => {
          console.log(nextState)
          let obj = {
            annotation: {
              ...nextState.history[0],
              regionsArr: nextState.images[0].regions,
            },
          }
          let newArr = [...window.annotation_redo]
          newArr.push(obj)

          // let final = newArr.filter((item, index, self) => {
          //   if (
          //     index ===
          //     self.findIndex(
          //       (t) =>
          //         t?.annotation?.lastMouseMoveCall ===
          //         item?.annotation?.lastMouseMoveCall
          //     )
          //   ) {
          //     return item
          //   }
          // })
          window.annotation_redo = newArr

          return setIn(
            nextState.history[0].state,
            ["history"],
            nextState.history.slice(1)
          )
        }

        return history_return()
      }
    } else {
      if (
        prevState !== nextState &&
        Object.keys(typesToSaveWithHistory).includes(action.type)
      ) {
        return setIn(
          nextState,
          ["history"],
          [
            {
              time: moment().toDate(),
              state: without(prevState, "history"),
              name: typesToSaveWithHistory[action.type] || action.type,
            },
          ]
            .concat(nextState.history || [])
            .slice(0, 9)
        )
      }
    }

    return nextState
  }
}
