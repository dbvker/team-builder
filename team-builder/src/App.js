import React, { useState } from 'react';


import './App.css';

import Form from './components/Form';
import MemberBox from './components/MemberBox';

const teamMemberList = [
  { memberName: 'Dylan', email: '123@yahoo.com', role: 'Backend Engineer' },
]

const initialFormValues = {
  memberName: '',
  email: '',
  role: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [teamMembers, setTeamMembers] = useState(teamMemberList);
  const [error, setError] = useState('');

  const change = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  }

  const submit = (event) => {
    event.preventDefault();
    const newMember = {
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMembers(teamMembers.concat(newMember));
    setFormValues(initialFormValues);

    if (!newMember.memberName || !newMember.email || !newMember.role) {
      setError('All fields are required');
      setTeamMembers([ ...teamMembers ]);
    } else {
      setError('');
    }
  }

  return (
    <div className='container'>
      <h1>Team Builder</h1>
      <h2>{error}</h2>
      <Form
        values={formValues}
        update={change}
        submit={submit}
      />
      {teamMembers.map((member, index) => (
          <MemberBox details={member} key={index} />
      ))}
    </div>
  );
}

export default App;
