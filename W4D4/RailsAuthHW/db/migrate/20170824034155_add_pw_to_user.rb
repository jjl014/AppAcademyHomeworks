class AddPwToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :password, :string, null: false
    remove_column :users, :session_token
    add_column :users, :session_token, :string, null: false
    add_index :users, :session_token, unique: true
  end
end
