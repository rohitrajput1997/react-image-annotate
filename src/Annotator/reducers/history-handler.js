// @flow

import moment from "moment"
import { setIn, updateIn, without } from "seamless-immutable"
import type { Action, MainLayoutState } from "../../MainLayout/types"

const typesToSaveWithHistory = {
  BEGIN_BOX_TRANSFORM: "Transform/Move Box",
  BEGIN_MOVE_POINT: "Move Point",
  DELETE_REGION: "Delete Region",
}

export const saveToHistory = (state: MainLayoutState, name: string) => {
  console.log(state, name)
  return updateIn(state, ["history"], (h) => {
    console.log(
      [
        {
          time: moment().toDate(),
          state: without(state, "history"),
          name,
        },
      ].concat((h || []).slice(0, 9))
    )
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

    if (action.type === "RESTORE_HISTORY") {
      if (state.history.length > 0) {
        let history_return = () => {
          let obj = {
            annotation: {
              ...nextState.history[0].state,
              history_type: nextState.history[0].name,
            },
          }
          let newArr = [...window.annotation_redo]
          newArr.push(obj)

          let final = newArr.filter((item, index, self) => {
            if (
              index ===
              self.findIndex(
                (t) =>
                  t?.annotation?.lastMouseMoveCall ===
                  item?.annotation?.lastMouseMoveCall
              )
            ) {
              return item
            }
          })
          window.annotation_redo = final

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
