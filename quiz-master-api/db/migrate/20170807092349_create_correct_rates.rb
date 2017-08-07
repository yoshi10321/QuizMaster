class CreateCorrectRates < ActiveRecord::Migration[5.1]
  def change
    create_table :correct_rates do |t|
      t.integer :correct_count
      t.integer :incorrect_count
      t.integer :correct_rate
      t.references :question, foreign_key: true

      t.timestamps
    end
    add_index :correct_rates, :correct_rate
  end
end
