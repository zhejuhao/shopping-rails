class AddInventoryToGoods < ActiveRecord::Migration
  def change
    add_column :goods, :inventory, :integer
  end
end
