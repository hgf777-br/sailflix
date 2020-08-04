import React, {useState} from 'react';
import {
  VideoCardGroupContainer, Title, ExtraLink, Bt,
} from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import videosRepository from '../../repositories/videos';
import Modal from '../Modal';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const [dadosModal, ToggleShowModal] = useState({ show: 'true' });
  const { videos } = category;

  function onCancel() {
    ToggleShowModal({
      show: 'false',
    });
  }

  function showModal() {
    return (
      <Modal
      show={dadosModal.show}
      conteudo='ventos uivantes'
      titulo='Excluir Video'
      onCancel={onCancel}
      txt1='excluir'
    />
    );
  }

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <Bt type="button" onClick={() => {
                videosRepository.delVideo(category.id, video.id);
              }}>
                apagar
              </Bt>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
