class CreateMessageboards < ActiveRecord::Migration
  def change
    create_table :messageboards do |t|
      t.string :title
      t.string :author
      t.text :text

      t.timestamps null: false
    end
  end
end
