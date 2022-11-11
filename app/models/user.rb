class User < ApplicationRecord
  # has_many :hotels, class_name: "Hotel", foreign_key: "user_id", dependent: :destroy
  has_many :reservations, class_name: 'Reservation', foreign_key: 'user_id', dependent: :destroy

  validates :username, presence: true, length: { maximum: 50 }, uniqueness: true
end
