import logo from '../assets/logo.png'
import { MapPin, Briefcase, Calendar, CalendarPlus } from 'lucide-react'

function Header() {
    return(
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative'>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='flex flex-col items-center py-6 text-sm'>
                    <img className='w-70 h-9' src={logo} alt="Enterprise logo"/>
                    <p className='text-3xl font-bold text-center text-gray-900'>Relatório Magnético</p>
                </div>

                <div className='flex flex-row gap-6 text-xl'>
                    <h3>Magtek Soluções Magnéticas</h3>
                    <h3>CNPJ: 00.000.000/0001-00</h3>
                    <h3>Inscrição Estadual: 00.000.000.000</h3>
                </div>

                <div className='flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8'>
                    <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                        <span>São Caetano, SP</span>
                    </div>

                    <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Visita Técnica</span>
                    </div>

                    <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        <span>02/03/2025</span>
                    </div>

                    <div className="flex items-center">
                        <CalendarPlus className="h-5 w-5 text-gray-400 mr-2" />
                        <span>02/03/2025</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;