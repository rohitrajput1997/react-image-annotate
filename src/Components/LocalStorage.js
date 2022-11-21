const LocalStorage = () => {
  return {
    get_task_rules() {
      try {
        return JSON.parse(localStorage.getItem("rules_data"))
      } catch {
        return {}
      }
    },
  }
}

export default LocalStorage()

