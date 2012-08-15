
# http://localhost:4000/
desc 'preview'
task :preview do
system("jekyll --pygments --auto --server")
end

desc 'Clean up generated site'
task :clean do
  cleanup
end

desc 'Build site with Jekyll'
task :build => :clean do
  jekyll
end
