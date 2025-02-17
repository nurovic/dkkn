import React from 'react';

const ProductFilters = () => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="mb-6">
          <h4 className="font-medium mb-2">Kategoriler</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-orange-500" />
              Elektronik (245)
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-orange-500" />
              Moda (189)
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-orange-500" />
              Ev & Yaşam (156)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters; 