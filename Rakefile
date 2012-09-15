SOURCE = "."
CONFIG = {
  'posts' => File.join(SOURCE, "_posts"),
  'post_ext' => "md",
  'deploy_dir' => "_deploy",
  'deploy_remote' => "origin",
  'deploy_branch' => "master",
#  'deploy_branch' => "gh-pages",
}

task :default => :preview

desc 'preview on http://localhost:4000/'
task :preview do
  jekyll('--pygments --auto --server')
end

desc 'Clean up generated site'
task :clean do
  cleanup
end

desc 'Build site with Jekyll'
task :build => :clean do
  puts "## building _site ..."
  jekyll('--pygments')
  if !Dir.exist?("#{CONFIG['deploy_dir']}")
    abort("remote server is not setup ... rake aborted!")
  end
  (Dir["#{CONFIG['deploy_dir']}/*"]).each { |f| rm_rf(f) }
  system "cp -Rp _site/* #{CONFIG['deploy_dir']}"
  puts "## copying _site to #{CONFIG['deploy_dir']}"
end

# Usage: rake post title="A Title" [date="2012-02-09"]
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
    post.puts "category: [uncategorized]"
    post.puts "tags: []"
    post.puts "comments: true"
    post.puts "published: true"
    post.puts "---"
    post.puts "\n<!--more-->"
  end
end

# Usage: rake page name="about.html"
# You can also specify a sub-directory path.
# If you don't specify a file extention we create an index.html at the path specified
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

desc "deploy to the git server"
multitask :deploy => :build do
  puts "## Deploying ..."
  cd "#{CONFIG['deploy_dir']}" do
    system "git add ."
    system "git add -u"
    puts "\n## Committing: Site updated at #{Time.now.utc}"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m '#{message}'"
    puts "\n## Pushing generated #{CONFIG['deploy_dir']} to git server"
    system "git push #{CONFIG['deploy_remote']} #{CONFIG['deploy_branch']} --force"
    puts "\n## Deploy complete"
  end
end

desc "Set up _deploy folder and git remote server"
task :setup_remote, :repo do |t, args|
  if File.exist?("#{CONFIG['deploy_dir']}/.git")
    abort("rake aborted!") unless ask("remote server already exists. Do you want to overwrite?", ['y', 'n']) == 'y'
  end
  if args.repo
    repo_url = args.repo
  else
    repo_url = get_stdin("Enter the read/write url for your repository: ")
  end

  abort("rake aborted!") unless ask("Create #{CONFIG['deploy_branch']} on " + repo_url + ". Continu?", ['y', 'n']) == 'y'

  rm_rf "#{CONFIG['deploy_dir']}"
  mkdir "#{CONFIG['deploy_dir']}"
  cd "#{CONFIG['deploy_dir']}" do
    system "git init"
    system "echo 'My page is coming soon &hellip;' > index.html"
    system "touch .nojekyll"
    system "git add ."
    system "git commit -m \"setup remote\""
    system "git branch -m #{CONFIG['deploy_branch']}" unless "#{CONFIG['deploy_branch']}" == 'master'
    system "git remote add #{CONFIG['deploy_remote']} #{repo_url}"
  end
  puts "\n---\n## Now you can deploy to remote server with `rake deploy` ##"
end

# git@github.com:tokkono/tokkono.github.com.git
# https://github.com/tokkono/tokkono.github.com.git

def cleanup
  sh 'rm -rf _site'
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
