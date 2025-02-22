import { memo } from "react";
import type { Pagination } from "../../types/product";
import { useProductFilters } from "../../store/Product";

interface PaginationProps {
  pagination: Pagination;
}

const Pagination = ({ pagination }: PaginationProps) => {
  console.log("Pagination Rerendered");
  const { setFilters } = useProductFilters();


  const handlePageChange = (page: number) => {
    console.log("Page Change PAGINATION", );
    if (pagination.page === page) return;
    setFilters({ ["page"]: page });

  };

  const onPageChange = (direction: "prev" | "next") => {

    const newPage = direction === "prev" ? pagination.page - 1 : pagination.page + 1;
    setFilters({ ["page"]: newPage });


    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex gap-2">
        <button 
          className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange("prev")}
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
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button 
          className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange("next")}
          disabled={pagination?.page === pagination?.totalPages}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default memo(Pagination, (prevProps, nextProps) => {
  return prevProps.pagination.page === nextProps.pagination.page &&
         prevProps.pagination.totalPages === nextProps.pagination.totalPages;
});
