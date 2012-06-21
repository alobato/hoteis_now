class CreateHotels < ActiveRecord::Migration
  def change
    create_table :hotels do |t|
      t.string :slug
      t.string :state
      t.string :city
      t.string :site
      t.string :name
      t.integer :priority
      t.integer :disabled
      t.integer :situation
      t.string :hotel_type
      t.text :description
      t.string :neighborhood
      t.string :address
      t.string :zipcode
      t.string :phone1
      t.string :phone2
      t.string :fax
      t.string :hotel_email
      t.string :contact_name
      t.string :contact_email
      t.string :contact_function
      t.string :hotel_type_slug
      t.string :city_slug
      t.string :category_slug
      t.timestamps
    end
  end
end
