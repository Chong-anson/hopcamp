# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, :email, :password_digest, presence: true 
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: {minimum: 6, allow_nil: true} 

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :bookings,
      dependent: :destroy 
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil 
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def generate_session_token 
        session_token = SecureRandom.urlsafe_base64(16)
        while (User.find_by(session_token: session_token))
            session_token = SecureRandom.urlsafe_base64(16)
        end
        session_token
    end

    def reset_session_token 
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

end
