import RepoCard from '../../commons/RepoCard'

export default function RepoList({data, onClick}) {
  return data.map((repo) => (
    <RepoCard key={repo.id} onClick={onClick} {...repo} />
  ))
}
