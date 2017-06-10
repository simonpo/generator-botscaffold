# Setup Guide #

## Your Azure account ##

You'll need an Azure account to create and manage your Bot. If you don't already have one, you can activate a free trial at [https://azure.microsoft.com/free/](https://azure.microsoft.com/free/).

Sign in to the Azure portal at https://portal.azure.com

## Walking through the BotScaffold Generator ##

The BotScaffold generator asks a series of questions, and uses your answers to create a Node.js application that you can use as the skeleton of your bot. 

While it does some of the grunt work, you will need to configure some Azure services to feed it the required information. 

The first four questions ask for the name of the app you want to build, a brief description of the bot, your name and your email address - all of which it writes into the config files. Once you've got that out of the way, we get to the interesting questions. The sections below tell you how to create the Azure services you need to answer them. 

### Enter your App ID / Enter your App Password

Sign into Azure, and click the **green +** sign in the left menu to create a new service. 

Select **Web + Mobile**, then choose **Web App**. 

![Create Web App](assets/AzureCreateWebApp-1.png) 

Fill out the form to create the Web App, entering a new **App name**, selecting a **Subscription**, and choosing either a new or existing **Resource Group**. Select an **App Service Plan/Location** either close to you, or to where most users of your Bot will be. Finally, choose to enable **Application Insights** (required for this version of the Botscaffold generator).

![Create Web App](assets/AzureCreateWebApp-2.png) 

Your app will be created and validated, and you will be returned to the Azure Dashboard while the app is deployed. After a few seconds the  App Overview screen will display: 

![Create Web App](assets/AzureCreateWebApp-3.png) 

Take note of the URL highlighted with the red box above, you'll need this shortly. 

In a new browser window, go to [https://dev.botframework.com/](https://dev.botframework.com/), sign in, click the **My bots** link on the homepage navigation bar, and select the **Create a bot** button. Here, we're going to create and register a new bot, and gather the information we need to put into the **Botscaffold** generator. You will need to refer to information from the Web App you created on the Azure Portal to create your bot. 

Follow the instructions on the **Tell us about your bot** form to create your bot. In the **Configuration** section, use the URL of your Azure Web App to create a messaging endpoint, replacing http:// with https:// and adding /api/messages to the end, like so:

![Create Bot](assets/BotframeworkCreateBot-1.png)

Select the **Create Microsoft App ID and Password** button, and a new browser window will open showing your **App ID** and button to generate a **Password**. Take careful note of the password that is generated, this is the only time you can see it displayed. 

![Create Bot](assets/BotframeworkCreateBot-2.png)

After you've saved the Password somewhere safe, click **OK** and then **Finish and go back to Bot Framework**. 

You now have the first two pieces of information you need to answer the Botscaffold generator's questions: paste the **App ID** and **App Password** into the generator when prompted, which will save them into the **.vscode\launch.json** file as environment variables for use in local bot testing. This file is included in the **.gitignore** file, and will not be uploaded to GitHub. 

![Enter AppID and Password](assets/Botscaffold-1.png)

Back on the **Tell us about your bot** page at dev.botframework.com, you can set up Analytics for your bot via Azure Application Insights. See [this document](https://docs.microsoft.com/en-us/bot-framework/portal-analytics-overview#enable-analytics) for details. If you enabled Application Insights during creation of your Web App, the AppInsights service has been set up for your bot already, and you can find your AppInsights instrumentation key in the Azure portal. The **Instrumentation Key** is located under the Essentials section on the Overview tab:

![AppInsights Key](assets/AppInsights-1.png)

You'll need to generate an **AppInsights API key**, so click the **API Key** tab on the menu and then **+ Create API Key**. and follow the instructions to do that. Make sure you copy this key somewhere safe, as it's not stored, and after you close this blade you won't be able to see it again.

![AppInsights Key](assets/AppInsights-2.png)

Once you've generated the key, copy and paste the Application ID and API Key into the **Tell us about your bot** form, review and accept the Terms of Use, Privacy Statement and Code of Conduct, and select **Register** to create your bot. 

![Create Bot](assets/BotframeworkCreateBot-3.png)

Congratulations - you've completed the first step of the process. Next, we'll set up LUIS so your bot can have an intelligent conversation. 

### Enter your App ID / Enter your App Password