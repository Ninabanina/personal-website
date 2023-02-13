---
title: "A Practical Guide to Email Preheader"
date: "2022-12-12"
imageURL: "../../sample-3.jpg"
imageAlt: "sample image"
---

What is Email Preheader?
An email preheader is a sentence-long text that follows a subject line when the email is viewed in an inbox. It also can be called preview text since it is used to provide a short summary of the email.

Why is an email preheader important? Below are some reasons:

Avoid spam complaints. By default, if the sender doesn’t customize the preheader, the email service will grab the first available content after the body tag to put there. In many cases, it ends up displaying ‘View in web browser’ or ‘Unsubscribe now’. It looks robotic and people are more likely to delete the email.
It increases the email open rate. There are only three pieces of information people will see when an email land up in their email: Sender, Subject line, and preheader. It is a piece of important information that will make users decide to open or trash your email. If you have put so much effort into the email's main body, you should put the same effort into the preheader to encourage people to open it.
Some email preheader best practices and tips:

Summarize the email content. Preheader text is a good place to identify the purpose of your email. Is it a recurring newsletter or a sales promo?

Make it meaningful. The preheader should contain essential information. Not to be confused with the subject line, the preheader can be the extension role. Go all-in with your subject line and the preheader can be used to reveal the best parts of your campaign.

Use emojis. Emails with emojis make the message look more creative and humane, and adding it to the preheader really makes your email stands out.

Personalize it. Making the email personalized is always a good way to increase the open rate since it can provide the recipients with a positive experience. Adding the recipient’s name into the preheader instead of putting it in the subject line, is a softer way to personalize.

Include CTA. If you don’t want to add a call-to-action in your email subject line, use it in the preheader so it can warm up the reader’s curiosity.

Keep it short. It is important to give details but also important to keep it concise. The reality is users might only spend 1 second to view your preheader, and some email services such as Gmail only allow preheaders between 100-120 symbols with spaces. And it is even shorter on mobile, which is around 35 letters. Also, short preheader text will also make your email stand out in a crowded inbox when all other emails are using long text.

How to customize an Email Preheader?
There are two ways you can customize the preheader in your email:

If you are using an email monitor such as Mailchimp, you should be able to find an input filed in the email editor (normally near the subject line set up line). Please see attached screenshot from the Campaign Monitor.

If you are using an email template that is in the HTML format, you can add below code snipe right after the body tag. The code allows you to hide the text from the actual email, so the recipient won’t see it in the main body of the email.

<div style="display: none; max-height: 0px; overflow: hidden;">
Insert hidden preheader text here.
</div>
However, the length of the preheader varies between different email clients, so you might want to add a chain of zero-width characters (&#847;) after the preview text so it can fill the remaining preview text space and display a short preheader.

<div style="display: none; max-height: 0px; overflow: hidden;">
&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;&#847;
</div>

In conclusion, email marketing is facing the challenge of whether your email is stand out in a crowded inbox or not. If you can’t get your user to open your email in the inbox, all the efforts you have put in to create it will go. Using all the email preheader tips shared above and you are making your email well on the way to success.
