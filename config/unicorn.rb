root = "/home/deployer/apps/hoteis_now/current"
working_directory root
pid "#{root}/tmp/pids/unicorn.pid"
stderr_path "#{root}/log/unicorn.log"
stdout_path "#{root}/log/unicorn.log"

listen "/tmp/unicorn.hoteis_now.sock"
worker_processes 2
timeout 30
