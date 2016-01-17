require 'mandrill'

def send_email params

	puts "sending email"
	m = Mandrill::API.new 

	emailBody = "I am an " + params[:radio] + " " + params[:radio2] + ". "
	if params[:cc] == "on"
		emailBody += "You can reach me at " + params[:email] + ". "
	end

	emailBody += params["emailContact"].sub(/\A\s+/,'')

	message = {  
		:subject=> "Website contact form test",  
		:from_name=> "Joe W3D4 web page",  
		:text=>emailBody,  
		:to=>[
			{:email=> "jcspampinato@gmail.com", 
			 :name=> "jcs"}
		],  
		:from_email=>"sender@yourdomain.com" 
	} 
	puts message[:html]
	puts "--------------------------------"
	puts message[:text]
	puts "--------------------------------"
	
	# sending = m.messages.send message 
	# puts sending
end
