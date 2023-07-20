import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Task } from '../../interfaces/Task';
import './ContentDetails.css'

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
    console.log("useEffect in ContentDetails")
    setFormValues(props.selectedTask || emptyTask);
  }, [props.selectedTask]);


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handleInputChange in ContentDetails")
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

  // Form effects
  useEffect(() => {
    const inputs = document.querySelectorAll('.group input');
    const handleBlur = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.value) {
        target.classList.add('used');
      } else {
        target.classList.remove('used');
      }
    };

    inputs.forEach((input) => {
      input.addEventListener('blur', handleBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('blur', handleBlur);
      });
    };
  });

  return (
    <div className="content-details">
      <form className="" onSubmit={handleSubmit}>
        <div className="group">
          <input
            id="field1"
            type="text"
            name="description"
            className={`form-input`}
            value={formValues.description}
            onChange={handleInputChange}
            autoComplete='off'
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Description</label>
        </div>
        <div className="group">
          <input
            id="field2"
            type="text"
            name="assignee"
            className={`form-input`}
            value={formValues.assignee}
            onChange={handleInputChange}
            autoComplete='off'
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Assignee</label>
        </div>
        <div className="group">
          <input
            id="field3"
            type="text"
            name="status"
            className={`form-input`}
            value={formValues.status}
            onChange={handleInputChange}
            autoComplete='off'
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Status</label>
        </div>
        <div className="group">
          <input
            id="field4"
            type="number"
            name="priority"
            className='used'
            value={formValues.priority}
            onChange={handleInputChange}
            autoComplete='off'
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Priority</label>
        </div>
        <div className="group">
          <input
            id="field5"
            type="date"
            name="dueDate"
            className='used'
            value={formValues.dueDate.toISOString().substr(0, 10)}
            onChange={handleDateChange}
            autoComplete='off'
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Due Date</label>
        </div>
        <div className='form-buttons'>
        <button type="submit" id='saveButton' className="button buttonBlue">Save
          <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
        </button>
        <button type="button" id='clearButton' className="button buttonBlue" onClick={props.onClear}>Clear
          <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContentDetails;