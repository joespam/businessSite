require 'mandrill'

def send_email params

	puts "sending email"
	m = Mandrill::API.new 
	emailBody = params["emailContact"].sub(/\A\s+/,'')

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
	sending = m.messages.send message 
	puts sending
end
