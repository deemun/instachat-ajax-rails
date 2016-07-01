class Messageboard < ActiveRecord::Base
	validates :title, presence:true
end
