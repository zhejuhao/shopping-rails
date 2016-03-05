class CreateGoods < ActiveRecord::Migration
  def change
    create_table :goods do |t|
      t.text :sort
      t.text :name
      t.text :unit
      t.float :price
      t.float :inventory

      t.timestamps null: false
    end
  end
end
