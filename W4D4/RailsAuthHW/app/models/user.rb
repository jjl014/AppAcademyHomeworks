class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: { message: 'Password can\'t be blank'}
  validates :password_digest, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token

  attr_reader :password

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    return user if BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
end
