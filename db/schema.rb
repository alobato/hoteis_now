# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120620002103) do

  create_table "cities", :force => true do |t|
    t.string   "slug"
    t.string   "state"
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "hotels", :force => true do |t|
    t.string   "slug"
    t.string   "state"
    t.string   "city"
    t.string   "site"
    t.string   "name"
    t.integer  "priority"
    t.integer  "disabled"
    t.integer  "situation"
    t.string   "hotel_type"
    t.text     "description"
    t.string   "neighborhood"
    t.string   "address"
    t.string   "zipcode"
    t.string   "phone1"
    t.string   "phone2"
    t.string   "fax"
    t.string   "hotel_email"
    t.string   "contact_name"
    t.string   "contact_email"
    t.string   "contact_function"
    t.string   "hotel_type_slug"
    t.string   "city_slug"
    t.string   "category_slug"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

end
