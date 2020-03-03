class User < ApplicationRecord
    validates :username, :first_name, :last_name, :email, :password_digest, presence: true 
    validates :username, :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password:, length: {minimum: 6, allow_nil: true} 

    after_initialize :ensure_session_token
    attr_reader :password

    private
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
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

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

end
