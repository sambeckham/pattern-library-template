$manifest = <<PUPPET

	Exec {
	    path => ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin', '/usr/local/sbin']
	}

	exec { 'apt-get update':
	    command => 'apt-get -qq -y update --fix-missing',
	    unless  => 'grep -F `date +"%y-%m-%d"` /var/log/apt/history.log'
	}

	exec { 'locale':
	    command => 'locale-gen en_GB.UTF-8',
	    unless  => 'validlocale en_GB.UTF-8'
	}

	exec { 'login-directory':
	    command => 'echo "if [ -d /vagrant ]; then cd /vagrant; fi" >> /home/vagrant/.bashrc',
	    unless  => 'grep -F "if [ -d /vagrant ]; then cd /vagrant; fi" /home/vagrant/.bashrc'
	}

	package { 'build-essential':
	    ensure  => present,
	    name    => 'build-essential',
	    require => Exec['apt-get update']
	}

	package { 'ruby-dev':
	    ensure  => present,
	    name    => 'ruby-dev',
	    require => Package['build-essential']
	}

	package { 'ruby':
	    ensure  => present,
	    name    => 'ruby1.9.3',
	    require => [Exec['locale'], Package['ruby-dev']]
	}

	package { 'bundler':
	    ensure  => present,
	    name    => 'bundler',
	    require => Package['ruby']
	}

	package { 'node':
	    ensure  => present,
	    name    => 'nodejs',
	    require => Exec['apt-get update']
	}

	file { '/usr/bin/node':
	   ensure => 'link',
	   target => '/usr/bin/nodejs',
	   require => Package['node']
	}

	package { 'npm':
	    ensure  => present,
	    name    => 'npm',
	    require => Package['node']
	}

	exec { 'npm install':
	    command => 'su vagrant -c "npm install"',
	    cwd => '/vagrant',
	    creates => "/vagrant/node_modules",
	    require => Package['npm']
	}

	exec { 'bundle install':
	    command => 'su vagrant -c "bundle install"',
	    unless => "bundle check",
	    cwd => '/vagrant',
	    require => Package['bundler']
	}

	exec { 'bower install':
	    command => 'su vagrant -c "/vagrant/node_modules/.bin/bower install --config.interactive=false"',
	    cwd => '/vagrant',
	    creates => "/vagrant/node_modules/.bin/bower",
	    require => [Package['npm'], Exec['npm install']]
	}

	file { '/usr/bin/grunt':
	   ensure => 'link',
	   target => '/vagrant/node_modules/.bin/grunt',
	   require => Exec['npm install']
	}

	file { '/usr/bin/bower':
	   ensure => 'link',
	   target => '/vagrant/node_modules/.bin/bower',
	   require => Exec['bower install']
	}

PUPPET

def inline_puppet(manifest)
	require 'base64'
	"TMPFILE=$(mktemp); echo '#{Base64.strict_encode64(manifest)}' | base64 --decode > $TMPFILE; puppet apply -v $TMPFILE"
end

Vagrant.configure("2") do |config|
	
	config.vm.box = "trusty64"
	config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

	config.vm.hostname = "vagrant.local"

	config.vm.network :forwarded_port, guest: 9000, host: 9000, auto_correct: false
	config.vm.network :forwarded_port, guest: 35729, host: 35729, auto_correct: false
	
	config.vm.provider :virtualbox do |virtualbox|
		virtualbox.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
		virtualbox.customize ["modifyvm", :id, "--memory", "2048"]
		virtualbox.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
		virtualbox.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
	end

	config.vm.provision :shell, :inline => inline_puppet($manifest)

end
