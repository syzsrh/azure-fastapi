import { getApi } from './services/index';
import { useQuery } from 'react-query';

export default function Message() {
    const { data: msg } = useQuery('api', getApi);
    return (
        <h2>Message: {msg.message} </h2>
    )
}