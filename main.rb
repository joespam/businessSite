#
#  Ruby file for sinatra site conversion demo
#
require 'bundler/setup'
require 'sinatra'
require './views/sendmail.rb'

#  toplevel
#
get '/' do
	@title_name="Home"
	erb :index 
end

# partner landing page
#
get '/partner' do
	@title_name="Partners"
	erb :partner
end

# subscriber landing page
#
get '/subscriber' do
	@title_name="Subscriber"
	erb :subscriber
end

# provider landing page
#
get '/provider' do
	@title_name="Provider"
	erb :provider
end

# contact us page
#
get '/contact' do
	@title_name="Contact"
	erb :contact
end

# action when the 'submit' button is pushed
#  on the "contact us" page
#
post '/contact_us' do
	send_email params
	erb :index
end

# action when the ' subscriber login' button is pushed
#
post '/subscriber_login' do
	puts "-------------------------------- my params are" + params.inspect
	@title_name="Subscriber"
	erb :subscriber
end

# action when the 'content provider login' button is
# pushed
post '/provider_login' do
	puts "------------------------------- my params are" + params.inspect
	@title_name="Provider"
	erb :provider
end