#----------------------------------------------------------------------
# Configuration
#----------------------------------------------------------------------
SOURCE = "."
CONFIG = {
  'posts' => File.join(SOURCE, "_posts"),
  'post_ext' => "md",

# Setup for GitHub Pages.
# If you deploy to a 'gh-pages' branch on GitHub,
# use automatic Project Page generator at first.
# See https://help.github.com/articles/creating-pages-with-the-automatic-generator
  'type_github' => {
    'deploy_dir' => "_deploy",
    'deploy_remote' => "origin",
    'deploy_branch' => "master",
#   'deploy_branch' => "gh-pages",
  },

# Setup for Heroku.
# Buildpack: https://github.com/pearkes/heroku-buildpack-static
  'type_heroku' => {
    'deploy_dir' => "_heroku",
    'deploy_remote' => "heroku",
    'deploy_branch' => "master",
    'buildpack' => "https://github.com/pearkes/heroku-buildpack-static",
  }
}

task :default => :preview

#----------------------------------------------------------------------
# Preview a blog.
# @usage: rake preview
#----------------------------------------------------------------------
desc "preview on http://localhost:4000/"
task :preview do
# jekyll('--pygments --auto --server')
  jekyll('--auto --server')
end

#----------------------------------------------------------------------
# Create a new post.
# @usage: rake post title="A Title" [date="2012-02-09"]
#----------------------------------------------------------------------
desc "Begin a new post in #{CONFIG['posts']}"
task :post, :title do |t, args|
  abort("rake aborted: '#{CONFIG['posts']}' directory not found.") unless FileTest.directory?(CONFIG['posts'])
  title = ENV["title"] || args.with_defaults(:title => 'new-post') && args.title
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
  rescue Exception => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end
  filename = File.join(CONFIG['posts'], "#{date}-#{slug}.#{CONFIG['post_ext']}")
  if File.exist?(filename)
    abort("rake aborted!") unless ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'y'
  end

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    post.puts "title: \"#{title.gsub(/-/,' ').gsub(/&/,'&amp;')}\""
    post.puts "description: \"\""
    post.puts "keywords: \"\""
    post.puts "excerpt: \"\""
    post.puts "thumbnail: \"\""
    post.puts "category: [uncategorized]"
    post.puts "tags: []"
    post.puts "comments: true"
    post.puts "published: true"
    post.puts "---"
    post.puts "\n<!--more-->"
  end
end

#----------------------------------------------------------------------
# Create a new page.
# @usage: rake page name="about.html"
# You can also specify a sub-directory path.
# If you don't specify a file extention we create an index.html
# at the path specified
#----------------------------------------------------------------------
desc "Create a new page."
task :page do
  name = ENV["name"] || "new-page.md"
  filename = File.join(SOURCE, "#{name}")
  filename = File.join(filename, "index.html") if File.extname(filename) == ""
  title = File.basename(filename, File.extname(filename)).gsub(/[\W\_]/, " ").gsub(/\b\w/){$&.upcase}
  if File.exist?(filename)
    abort("rake aborted!") unless ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'y'
  end

  mkdir_p File.dirname(filename)
  puts "Creating new page: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: page"
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    post.puts "title: \"#{title}\""
    post.puts "description: \"\""
    post.puts "keywords: \"\""
    post.puts "published: true"
    post.puts "---"
  end
end

#----------------------------------------------------------------------
# Clean a blog.
# @usage: rake clean
#----------------------------------------------------------------------
desc "Clean up generated site"
task :clean do
  cleanup
end

#----------------------------------------------------------------------
# Build & Deploy for GitHub type
# @usage: rake build / rake deploy
#----------------------------------------------------------------------
desc "Build site with Jekyll"
task :build => :clean do
  build_site(CONFIG['type_github'])
end

desc "Deploy to GitHub or Bitbucket"
multitask :deploy => :build do
  deploy_site(CONFIG['type_github'])
end

#----------------------------------------------------------------------
# Setup git remote server.
# @usage: rake setup_remote [repository-name]
#----------------------------------------------------------------------
desc "Set up _deploy folder and git remote server"
task :setup_remote, :repo do |t, args|
  config = CONFIG['type_github']
  if File.exist?("#{config['deploy_dir']}/.git")
    abort("rake aborted!") unless ask("remote server already exists. Do you want to overwrite?", ['y', 'n']) == 'y'
  end
  if args.repo
    repo_url = args.repo
  else
    repo_url = get_stdin("Enter your repository uri for read/write: ")
  end

  abort("rake aborted!") unless ask("Create #{config['deploy_branch']} on " + repo_url + ".\nContinu?", ['y', 'n']) == 'y'

  rm_rf "#{config['deploy_dir']}"
  mkdir "#{config['deploy_dir']}"
  cd "#{config['deploy_dir']}" do
    system "git init"
    system "echo 'My page is coming soon &hellip;' > index.html"
    system "touch .nojekyll"
    system "git add ."
    system "git commit -m \"setup remote\""
    system "git branch -m #{config['deploy_branch']}" unless "#{config['deploy_branch']}" == 'master'
    system "git remote add #{config['deploy_remote']} #{repo_url}"
  end
  puts "\n---\n## Now you can deploy to remote server with `rake deploy` ##"
end

#----------------------------------------------------------------------
# Build & Deploy for Heroku type
# @usage: rake build_heroku / rake heroku
#----------------------------------------------------------------------
desc "Build site for Heroku"
task :build_heroku => :clean do
  build_site(CONFIG['type_heroku'])
end

desc "Deploy app to Heroku"
multitask :heroku => :build_heroku do
  deploy_site(CONFIG['type_heroku'])
end

#----------------------------------------------------------------------
# Setup heroku server.
# @usage: rake heroku [app-name]
#----------------------------------------------------------------------
desc "Set up _heroku folder and create app with buildpack"
task :setup_heroku, :app do |t, args|
  config = CONFIG['type_heroku']
  if File.exist?("#{config['deploy_dir']}/.git")
    abort("rake aborted!") unless ask("remote server already exists. Do you want to overwrite?", ['y', 'n']) == 'y'
  end
  if args.app
    app_name = args.app
  else
    app_name = get_stdin("Enter new app name (if blank, Heroku makes it fancy!): ")
  end

  abort("rake aborted!") unless ask("Create #{config['deploy_branch']} for " + app_name + ".\nContinu?", ['y', 'n']) == 'y'

  rm_rf "#{config['deploy_dir']}"
  mkdir "#{config['deploy_dir']}"
  cd "#{config['deploy_dir']}" do
    system "git init"
    system "heroku create #{app_name} --stack cedar --buildpack #{config['buildpack']}"
  end
  puts "\n---\n## Now you can deploy to remote server with `rake deploy` ##"
end

#----------------------------------------------------------------------
# Build & Deploy common function
#----------------------------------------------------------------------
def cleanup
  puts "## cleanup _site ..."
  sh 'rm -rf _site'
end

def build_site(args)
  puts "## building _site ..."
# jekyll('--pygments')
  jekyll()
  if !Dir.exist?("#{args['deploy_dir']}")
    abort("you should setup remote server ... rake aborted!")
  end
  (Dir["#{args['deploy_dir']}/*"]).each { |f| rm_rf(f) }
  system "cp -Rp _site/* #{args['deploy_dir']}"
  puts "## copying _site to #{args['deploy_dir']}"
end

def deploy_site(args)
  puts "## Deploying ..."
  cd "#{args['deploy_dir']}" do
    system "git add ."
    system "git add -u"
    puts "\n## Committing: Site updated at #{Time.now.utc}"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m '#{message}'"
    puts "\n## Pushing generated #{args['deploy_dir']} to git server"
    system "git push #{args['deploy_remote']} #{args['deploy_branch']} --force"
    puts "\n## Deploy complete"
  end
end

def jekyll(opts = '')
  sh 'jekyll ' + opts
end

def ask(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')} ") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end
