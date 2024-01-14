import './App.css';
import Form from './components/Form';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex align-items-center flex-column justify-content-center mt-5 w-50">
        <Form />
        <ServiceList />
      </div>
    </div>
  );
}

export default App;
