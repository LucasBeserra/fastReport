import './App.css';
import ActionButtons from './components/ActionButtons';
import HeaderHead from './components/HeaderHead';
import QualityCheckTable from './components/QualityCheckTable';

function App() {

  return (
    <div className='min-h-screen bg-gray-100 rounded-lg flex flex-col justify-content-center'>
      <HeaderHead />
      <QualityCheckTable />
      <ActionButtons />
    </div>
  )
}

export default App
