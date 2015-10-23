#
#  Ruby file for sinatra site conversion demo
#
require 'bundler/setup'
require 'sinatra'
require './views/sendmail.rb'

#  toplevel
#
get '/' do
	erb :index 
end

# subscriber landing page
#
get '/subscriber' do
	erb :subscriber
end

# provider landing page
#
get '/provider' do
	erb :provider
end

# contact us page
#
get '/contact' do
	erb :contact
end

# action when the 'submit' button is pushed
#  on the "contact us" page
#
post '/views/contact_us' do
	puts "my params are" + params.inspect
#	send_email params
end

# action when the ' subscriber login' button is pushed
#
post '/views/subscriber' do
	puts "my params are" + params.inspect
end

# action when the 'content provider login' button is
# pushed
post '/views/provider' do
	puts "my params are" + params.inspect
end