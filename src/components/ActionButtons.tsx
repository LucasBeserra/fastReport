import { CloudUpload } from "lucide-react";

function ActionButtons() {

    return(
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          type="button"
          className="flex-1 bg-gray-100 py-3 px-4 rounded-md text-gray-700 font-medium flex items-center justify-center"
        >
          <CloudUpload className="h-5 w-5 mr-2" />
          Enviar relatório
        </button>
      </div>
    )
}

export default ActionButtons;