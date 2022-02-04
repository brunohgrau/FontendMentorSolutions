import styled from "styled-components";

/* Cluster: Como posicionar um elemento ao lado do outro em uma linha? */

export const Cluster1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1;
  justify-content: center;
  align-items: center;
`;

export const Cluster2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
