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
	# hardcoded mockup gallery array
	@videos = [
		"/images/subscriber/FeedClassUmbrella_001.jpg",
		"/images/subscriber/FeedClassUmbrella_002.jpg",
		"/images/subscriber/FeedClassUmbrella_003.jpg",
		"/images/subscriber/FeedClassUmbrella_004.jpg",
		"/images/subscriber/FeedClassUmbrella_005.jpg",
	]
	erb :subscriber
end

# action when the ' subscriber login' button is pushed
#
post '/subscriber_login' do

	# hardcoded mockup gallery array
	@videos = [
		"/images/subscriber/FeedClassUmbrella_001.jpg",
		"/images/subscriber/FeedClassUmbrella_002.jpg",
		"/images/subscriber/FeedClassUmbrella_003.jpg",
		"/images/subscriber/FeedClassUmbrella_004.jpg",
		"/images/subscriber/FeedClassUmbrella_005.jpg",
	]

	@title_name="Subscriber"
	erb :subscriber
end

# provider landing page
#
get '/provider' do
	@title_name="Provider"
	# hardcoded mockup gallery array
	@videos = [
		"/images/provider/vidthumb 001.jpg",
		"/images/provider/vidthumb 002.jpg",
		"/images/provider/vidthumb 003.jpg",
		"/images/provider/vidthumb 004.jpg",
		"/images/provider/vidthumb 005.jpg",
		"/images/provider/vidthumb 006.jpg",
		"/images/provider/vidthumb 007.jpg",
		"/images/provider/vidthumb 008.jpg",
		"/images/provider/vidthumb 009.jpg",
		"/images/provider/vidthumb 010.jpg",
		"/images/provider/vidthumb 011.jpg",
		"/images/provider/vidthumb 012.jpg"
	]
	erb :provider
end

# action when the 'content provider login' button is
# pushed
post '/provider_login' do

	# hardcoded mockup gallery array
	@videos = [
		"/images/provider/vidthumb 001.jpg",
		"/images/provider/vidthumb 002.jpg",
		"/images/provider/vidthumb 003.jpg",
		"/images/provider/vidthumb 004.jpg",
		"/images/provider/vidthumb 005.jpg",
		"/images/provider/vidthumb 006.jpg",
		"/images/provider/vidthumb 007.jpg",
		"/images/provider/vidthumb 008.jpg",
		"/images/provider/vidthumb 009.jpg",
		"/images/provider/vidthumb 010.jpg",
		"/images/provider/vidthumb 011.jpg",
		"/images/provider/vidthumb 012.jpg"
	]
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

get '/upload_video' do
	erb :upvideo
end

get '/play_video' do
	erb :playvideo
end