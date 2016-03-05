class CreateCartInfos < ActiveRecord::Migration
  def change
    create_table :cart_infos do |t|
      t.text :sort
      t.text :name
      t.text :unit
      t.float :price
      t.integer :count
      t.integer :inventory

      t.timestamps null: false
    end
  end
end
