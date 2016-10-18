# Pi-Jams

<img class="alignnone size-medium wp-image-166" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/WIRES-300x300.jpg" alt="wires" width="300" height="300" />

<h4>1. Connecting to a network</h4>
To access the local server that will be hosted on your Pi, your other devices needed to be connected to the same network. If you are on a private/home network, this won't be too much of a problem. If you are on a public/enterprise/school network, you may need to setup an auxillary wireless router for the Pi to be connected to. This will allow you to access the Pi's server as long as you are connected to the auxillary router network.

In this case, [ we were working with a Mac Airport Base station.](https://www.amazon.com/Apple-AirPort-Express-Station-MC414LL/dp/B008ALA2RC)

It has one input port (where ethernet is plugged in) and three output ports (where I plugged in ethernet to my laptop and Raspberry Pi.)

To setup the station you have to use AirPort Utility, which is in the Utilities folder in your Finder.

<img class="alignnone size-medium wp-image-168" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/UTILITIES2-300x258.png" alt="utilities2" width="300" height="258" />

In Networks in System Preferences you can check your computer's IP address.

<img class="alignnone size-medium wp-image-170" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/IP-300x62.png" alt="ip" width="300" height="62" />

In AirPort Utility, go to File &gt; Configure Other.

<img class="alignnone size-medium wp-image-169" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/AIRPORT-300x231.png" alt="airport" width="300" height="231" />

You will be prompted with an IP address and password.

<img class="alignnone size-medium wp-image-171" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/Screen-Shot-2016-09-20-at-7.47.27-PM-300x123.png" alt="screen-shot-2016-09-20-at-7-47-27-pm" width="300" height="123" />

At this point, you should be able to get an internet connection to your Pi and other device.


Use ```ifconfig``` to find the IP address of the Pi. (You can use the console cable for this first time around.)

<img class="alignnone size-medium wp-image-175" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/ifconfig-300x189.gif" alt="ifconfig" width="300" height="189" />

SSH into your Pi using the ```ssh pi@``` the address from ```ifconfig```

<img class="alignnone size-medium wp-image-176" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/ssh-1-300x189.gif" alt="ssh" width="300" height="189" />

<h4>2. Update/Upgrade</h4>

```sudo apt-get update```

```sudo apt-get upgrade```


<h4>3. Installing Dependencies for LAMP (Linux, Apache, mySQL, PHP) Server.

Here are the steps I followed based off this
<a href="https://www.raspberrypi.org/learning/lamp-web-server-with-wordpress/worksheet/">AMAZING TUTORIAL</a>.</h4>
####Install Apache
<pre class=" language-bash"><code class=" language-bash">sudo apt<span class="token operator">-</span>get install apache2 <span class="token operator">-</span>y</code></pre>
####Install PHP
<pre class=" language-bash"><code class=" language-bash">sudo apt<span class="token operator">-</span>get install php5 libapache2<span class="token operator">-</span>mod<span class="token operator">-</span>php5 <span class="token operator">-</span>y</code></pre>
####Install mySQL
<pre class=" language-bash"><code class=" language-bash">sudo apt<span class="token operator">-</span>get install mysql<span class="token operator">-</span>server php5<span class="token operator">-</span>mysql <span class="token operator">-</span>y</code></pre>
####Restarting Apache
<pre class=" language-bash"><code class=" language-bash">sudo service apache2 restart</code></pre>
I followed that tutorial up to the Wordpress section...
<h4> 4. testing apache</h4>
To test if the apache server is working type your Pi's IP address into your laptop's browser. You can see this on your laptop because both machines are connected to a local network via router.

<img class="alignnone size-medium wp-image-178" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/Screen-Shot-2016-09-20-at-8.17.22-PM-300x239.png" alt="screen-shot-2016-09-20-at-8-17-22-pm" width="300" height="239" />

<h4>5. Interfacing with Opentape.fm</h4>
Commands used to move opentape.fm (downloaded on my computer) to the raspberry pi via sftp:

```sftp pi@10.0.1.4```

```mv opentape-0.12.zip /var/www/html/```

```unzip opentape-0.12.zip```

```/var/www/html/``` is where the index.html for the Apache server is located.

<h4>6. Troubleshooting Opentape.fm</h4>
When I opened http://10.0.1.4/opentape/index.php I received a message that /settings/ and /songs/ needed read/write permissions.

<a href="https://www.g-loaded.eu/2008/12/09/making-a-directory-writable-by-the-webserver/">I used this tutorial to troubleshoot.</a>
<pre class="console">chmod g+w /path/to/mydir</pre>
the path to each directory was:

```/var/www/html/songs/

/var/www/html/settings/```

There was also initially a 2mb max upload size by default through Apache.

<a href="http://www.miscdebris.net/blog/2008/04/14/changing-the-php-file-upload-limit-in-ubuntu-linux/"> Use this tutorial to troubleshoot or use the commands below.</a>
<pre>sudo nano /etc/php5/apache2/php.ini</pre>
CTRL + W to search for
<pre>upload_max_filesize 2M 2M</pre>
...changed to 20M...
<pre>sudo /etc/init.d/apache2 restart
</pre>
<img class="alignnone size-medium wp-image-180" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/Screen-Shot-2016-09-20-at-8.25.25-PM-300x113.png" alt="screen-shot-2016-09-20-at-8-25-25-pm" width="300" height="113" />
