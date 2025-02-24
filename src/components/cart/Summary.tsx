import React from 'react'
import type {SummaryType} from '../../types/cart'

interface ListItemProps {
    summary: SummaryType;
  }

const Summary: React.FC<ListItemProps> = ({summary}) => {
  return (
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
            <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Toplam Fiyat</span>
                <span> {summary.totalPrice.toLocaleString()} ₺</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Toplam Ürün Adedi</span>
                <span> {summary.totalQuantity} </span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex justify-between font-bold text-lg">
                <span>Toplam</span>
                <span>{summary.totalPrice.toLocaleString()} ₺ </span>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Alışverişi Tamamla
            </button>

            <div className="mt-6 space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>🚚</span>
                <span>Ücretsiz Kargo</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔄</span>
                <span>30 Gün İade Garantisi</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Güvenli Alışveriş</span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Summary
