import './App.css';
import ActionButtons from './components/ActionButtons';
import HeaderHead from './components/HeaderHead';
import QualityCheckTable from './components/QualityCheckTable';
import { DatePickerDemo} from './components/DatePicker';

function App() {

  return (
    <div className='min-h-screen bg-gray-100 rounded-lg flex flex-col justify-content-center'>
      <HeaderHead />
      <QualityCheckTable />
      <ActionButtons />
      <DatePickerDemo />
    </div>
  )
}

export default App
