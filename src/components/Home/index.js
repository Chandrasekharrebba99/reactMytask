import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

class Home extends Component {
  state = {
    tagsList: this.props,
    inputValue: '',
    optionTask: '',
    AllTasks: [],
    Category: '',
  }

  onClickCatogory = event => {
    this.setState({Category: event.target.value})
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionTask: event.target.value})
  }

  onsubmitform = event => {
    event.preventDefault()
    const {inputValue, optionTask, AllTasks} = this.state
    const newObj = {
      inputValue1: inputValue,
      optionVal: optionTask,
      id: uuidv4(),
    }
    const updatedTasks = [...AllTasks, newObj]

    this.setState({
      AllTasks: updatedTasks,
      inputValue: '',
      optionTask: 'Health',
    })
  }

  render() {
    const {tagsList, inputValue, optionTask, AllTasks, Category} = this.state
    console.log(AllTasks)

    const AllTasksnew = AllTasks.filter(arr => arr.optionVal.includes(Category))
    console.log(AllTasksnew)

    return (
      <div>
        <div>
          <h1>Create a Task!</h1>
          <form>
            <label htmlFor="TaskIn" placeholder="Enter the Task here">
              Task
            </label>
            <input
              id="TaskIn"
              onChange={this.onChangeInput}
              value={inputValue}
            />
            <label htmlFor="optionId">Tags</label>
            <select
              id="optionId"
              onChange={this.onChangeOption}
              value={optionTask}
            >
              {tagsList.tagsList.map(Arr => (
                <option key={Arr.optionId} value={Arr.optionId}>
                  {Arr.displayText}
                </option>
              ))}
            </select>
            <button type="submit" onClick={this.onsubmitform}>
              Add Task
            </button>
          </form>
        </div>
        <div>
          <h1>Tags</h1>
          <ul>
            {tagsList.tagsList.map(arr => (
              <li key={arr.optionId}>
                <button
                  type="button"
                  value={arr.displayText}
                  onClick={this.onClickCatogory}
                >
                  {arr.displayText}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Tasks</h1>
          {AllTasksnew.length === 0 && <p>No Tasks Added Yet</p>}
          <div>
            <ul>
              {AllTasksnew.map(arr => (
                <li>
                  <p>{arr.inputValue1}</p>
                  <p>{arr.optionVal}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
