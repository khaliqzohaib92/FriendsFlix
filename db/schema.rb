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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_05_170345) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_categories_on_title", unique: true
  end

  create_table "categorieslinks", force: :cascade do |t|
    t.integer "category_id"
    t.integer "video_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_categorieslinks_on_category_id"
    t.index ["video_id"], name: "index_categorieslinks_on_video_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "color", null: false
    t.index ["title", "user_id"], name: "index_profiles_on_title_and_user_id", unique: true
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "videos", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.integer "year", null: false
    t.string "video_type", null: false
    t.integer "runtime", null: false
    t.string "video_rating", null: false
    t.string "content_rating", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title", "year"], name: "index_videos_on_title_and_year", unique: true
  end

end
