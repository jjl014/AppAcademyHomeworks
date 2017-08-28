# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    User.new(
      email: "blabla@blabla.com",
      password: "good_password")
  end

  describe 'validations' do
    it { should validate_presence_of(:email)}
    it { should validate_presence_of(:password_digest)}
    it { should validate_length_of(:password).is_at_least(6)}
    # it 'should validate presence of email' do
    #   user = User.new(password:"hello")
    #   expect(user.valid?).to be false
    # end
    #
    # it 'should validate presence of password digest' do
    #   user = User.new(email:"hello",password:"worlddd")
    #   expect(user.password_digest).to_not be_nil
    # end
    #
    # it 'should validate length of password to at least be 6' do
    #   user = User.new(email:"hello",password:"worl")
    #   expect(user.valid?).to be false
    #
    #   user = User.new(email:"hello",password:"worldsof")
    #   expect(user.valid?).to be true
    # end
  end

  it "creates a password digest when a password is given" do
    expect(user.password_digest).to_not be_nil
  end

  it "creates a session token before validation" do
    user.valid?
    expect(user.session_token).to_not be_nil
  end

  describe '#reset_session_token!' do
    it "sets a new session token for the user" do
      user.valid?
      old_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_session_token)
    end
  end

  describe '#is_password?' do
    it "verifies that the password is correct" do
      expect(user.is_password?("good_password")).to be true
    end

    it "verifies that a password is incorrect" do
      expect(user.is_password?("bad_password")).to be false
    end
  end

  describe '::find_by_credentials' do
    before { user.save! }

    it "returns the user given good credentials" do
      expect(User.find_by_credentials("blabla@blabla.com", "good_password")).to eq(user)
    end

    it "returns nil given bad credentials" do
      expect(User.find_by_credentials("blabla@blabla.com", "bad_password")).to eq(nil)
    end
  end
end
