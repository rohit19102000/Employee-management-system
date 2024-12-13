import React from 'react';
import Header from '../Header/Header';
import CreateTasks from '../CreateTasks/CreateTasks';
import AllTasks from '../AllTasks/AllTasks';

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />

     <CreateTasks/>
     <AllTasks/>
    </div>
  );
};

export default AdminDashboard;