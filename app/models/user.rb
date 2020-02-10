class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :name, :session_token, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minumum: 6, allow_nil: true } 

  attr_reader :password


  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypted_password = BCrypt::Password.new(self.password_digest)
    bcrypted_password.is_password?(password)
  end

  def reset_session_tojen!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token(password)
    self.session_token ||= self.class.generate_session_token
  end

end
