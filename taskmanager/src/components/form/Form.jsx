export default function Form() {
    return (
        <form>
            <label>
                Task:
                <input type="text" name="name" placeholder="Do the task!"></input>
            </label>
            <label>
                Priority:
                <select>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <label>
                Description:
                <input type="text" name="description" placeholder="Describe the task!"></input>
            </label>
        </form>
    )
}