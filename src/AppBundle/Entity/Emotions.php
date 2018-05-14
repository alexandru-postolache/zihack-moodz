<?php

namespace AppBundle\Entity;

/**
 * Emotions
 */
class Emotions
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $sessionId;

    /**
     * @var string
     */
    private $anger;

    /**
     * @var string
     */
    private $contempt;

    /**
     * @var string
     */
    private $disgust;

    /**
     * @var string
     */
    private $fear;

    /**
     * @var string
     */
    private $happiness;

    /**
     * @var string
     */
    private $neutral;

    /**
     * @var string
     */
    private $sadness;

    /**
     * @var string
     */
    private $surprise;

    /**
     * @var \DateTime
     */
    private $datetime;



    public function __construct()
    {
        $this->datetime = new \DateTime();
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set sesssionId
     *
     * @param string $sessionId
     *
     * @return Emotions
     */
    public function setSessionId($sessionId)
    {
        $this->sessionId = $sessionId;

        return $this;
    }

    /**
     * Get sesssionId
     *
     * @return string
     */
    public function getSessionId()
    {
        return $this->sessionId;
    }

    /**
     * Set anger
     *
     * @param string $anger
     *
     * @return Emotions
     */
    public function setAnger($anger)
    {
        $this->anger = $anger;

        return $this;
    }

    /**
     * Get anger
     *
     * @return string
     */
    public function getAnger()
    {
        return $this->anger;
    }

    /**
     * Set contempt
     *
     * @param string $contempt
     *
     * @return Emotions
     */
    public function setContempt($contempt)
    {
        $this->contempt = $contempt;

        return $this;
    }

    /**
     * Get contempt
     *
     * @return string
     */
    public function getContempt()
    {
        return $this->contempt;
    }

    /**
     * Set disgust
     *
     * @param string $disgust
     *
     * @return Emotions
     */
    public function setDisgust($disgust)
    {
        $this->disgust = $disgust;

        return $this;
    }

    /**
     * Get disgust
     *
     * @return string
     */
    public function getDisgust()
    {
        return $this->disgust;
    }

    /**
     * Set fear
     *
     * @param string $fear
     *
     * @return Emotions
     */
    public function setFear($fear)
    {
        $this->fear = $fear;

        return $this;
    }

    /**
     * Get fear
     *
     * @return string
     */
    public function getFear()
    {
        return $this->fear;
    }

    /**
     * Set happiness
     *
     * @param string $happiness
     *
     * @return Emotions
     */
    public function setHappiness($happiness)
    {
        $this->happiness = $happiness;

        return $this;
    }

    /**
     * Get happiness
     *
     * @return string
     */
    public function getHappiness()
    {
        return $this->happiness;
    }

    /**
     * Set neutral
     *
     * @param string $neutral
     *
     * @return Emotions
     */
    public function setNeutral($neutral)
    {
        $this->neutral = $neutral;

        return $this;
    }

    /**
     * Get neutral
     *
     * @return string
     */
    public function getNeutral()
    {
        return $this->neutral;
    }

    /**
     * Set sadness
     *
     * @param string $sadness
     *
     * @return Emotions
     */
    public function setSadness($sadness)
    {
        $this->sadness = $sadness;

        return $this;
    }

    /**
     * Get sadness
     *
     * @return string
     */
    public function getSadness()
    {
        return $this->sadness;
    }

    /**
     * Set surprise
     *
     * @param string $surprise
     *
     * @return Emotions
     */
    public function setSurprise($surprise)
    {
        $this->surprise = $surprise;

        return $this;
    }

    /**
     * Get surprise
     *
     * @return string
     */
    public function getSurprise()
    {
        return $this->surprise;
    }

    /**
     * @return \DateTime
     */
    public function getDatetime(): \DateTime
    {
        return $this->datetime;
    }

    /**
     * @param \DateTime $datetime
     */
    public function setDatetime(\DateTime $datetime)
    {
        $this->datetime = $datetime;

        return $this;
    }
}

