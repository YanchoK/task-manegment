import React from 'react';
import { Task } from '../../interfaces';

interface Props {
  task: Task | null;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClear: () => void;
}

const ContentDetails: React.FC<Props> = ({
  task,
  handleInputChange,
  handleSubmit,
  handleClear,
}) => (
  <div className="content-details">
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        className="input"
        name="description"
        value={task?.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Assignee"
        className="input"
        name="assignee"
        value={task?.assignee}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Status"
        className="input"
        name="status"
        value={task?.status}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Priority"
        className="input"
        name="priority"
        value={task?.priority}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Due Date"
        className="input"
        name="dueDate"
        value={task?.dueDate ? task.dueDate.toDateString() : ''}
        onChange={handleInputChange}
      />
      <button className="form-button">Save</button>
      <button className="form-button" onClick={() => handleClear()}>Clear</button>
    </form>
  </div>
);

export default ContentDetails;
