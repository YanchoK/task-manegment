import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import { Task } from '../../interfaces/Task';

interface Props {
  onSave: (task: Task) => void;
  onUpdate: (task: Task) => void;
  selectedTask: Task;
  onClear: () => void;
}

const ContentDetails: React.FC<Props> = (props: Props) => {
  const emptyTask: Task = {
    id: -1,
    description: '',
    assignee: '',
    status: '',
    priority: 1,
    dueDate: new Date(),
  };

  const [formValues, setFormValues] = useState<Task>(emptyTask);

  useEffect(() => {
    setFormValues(props.selectedTask || emptyTask);
  }, [props.selectedTask]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormValues(prevValues => ({ ...prevValues, dueDate: new Date(value) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formValues.id !== -1) {
      props.onUpdate(formValues);
    } else {
      props.onSave(formValues);
    }
  };

  return (
    <div className="content-details">
      <form className="form" onSubmit={handleSubmit}>
        <input
          id='field1'
          type="text"
          placeholder="Description"
          className="input"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
          required
        />
        <input
          id='field2'
          type="text"
          placeholder="Assignee"
          className="input"
          name="assignee"
          value={formValues.assignee}
          onChange={handleInputChange}
          required
        />
        <input
          id='field3'
          type="text"
          placeholder="Status"
          className="input"
          name="status"
          value={formValues.status}
          onChange={handleInputChange}
          required
        />
        <input
          id='field4'
          type="text"
          placeholder="Priority"
          className="input"
          name="priority"
          value={formValues.priority}
          onChange={handleInputChange}
          required
        />
        <input
          id='field5'
          type="date"
          placeholder="Due Date"
          className="input"
          name="dueDate"
          value={formValues.dueDate.toISOString().substr(0, 10)}
          onChange={handleDateChange}
          required
        />
        <button id='saveButton' className="form-button" type="submit">Save</button>
        <button id='clearButton' className="form-button" onClick={props.onClear}>Clear</button>
      </form>
    </div>
  );
};

export default ContentDetails;