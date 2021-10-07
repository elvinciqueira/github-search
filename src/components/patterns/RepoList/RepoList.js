import RepoCard from '../../commons/RepoCard'

export default function RepoList({data}) {
  return data.map(({id, name, description, url}) => (
    <RepoCard key={id} name={name} description={description} url={url} />
  ))
}
