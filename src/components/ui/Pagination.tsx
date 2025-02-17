import type { Pagination } from "../../types/pagination";

interface PaginationProps {
  pagination: Pagination;
  onPageChange: (page: number) => void;
}

const Pagination = ({ pagination, onPageChange }: PaginationProps) => {
  console.log(pagination,"pagination")
  return (
    <div className="flex justify-center mt-8">
      <div className="flex gap-2">
        <button 
          className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(pagination?.page - 1)}
          disabled={pagination?.page === 1}
        >
          Önceki
        </button>

        {[...Array(pagination?.totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 border rounded-lg ${
              pagination?.page === index + 1 ? 'bg-orange-500 text-white' : 'hover:bg-gray-50'
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button 
          className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(pagination?.page + 1)}
          disabled={pagination?.page === pagination?.totalPages}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default Pagination; 