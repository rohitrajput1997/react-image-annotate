const LocalStorage = () => {
  return {
    get_task_rules() {
      try {
        return JSON.parse(localStorage.getItem("rules_data"))
      } catch {
        return {}
      }
    },
    get_visible_fields() {
      try {
        return this.get_task_rules()?.visible_fields
      } catch {
        return []
      }
    },
    get_dropdown() {
      try {
        return this.get_task_rules()?.dropdown_data
      } catch {
        return []
      }
    },
  }
}

export default LocalStorage()

